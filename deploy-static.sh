#!/bin/bash
# Etienne Jacquot
# 06/22/2026

export NAMED_PROFILE=atn-developer
export SITE_NAME=www.ejacquot.com
export CLOUDFRONT_DISTRIBUTION_ID=E3S1U2PUIOZIRW

echo "Building static site for $SITE_NAME using profile $NAMED_PROFILE"
# Build static site
npx next build

echo "Syncing static site to S3 bucket s3://$SITE_NAME/"
# Sync everything first
aws s3 sync out/ s3://$SITE_NAME/ --delete --profile=$NAMED_PROFILE

# Fix CSS content-type explicitly
aws s3 sync out/_next/ s3://$SITE_NAME/_next/ \
  --exclude "*" --include "*.css" \
  --content-type "text/css" \
  --profile=$NAMED_PROFILE

# Fix JS content-type explicitly  
aws s3 sync out/_next/ s3://$SITE_NAME/_next/ \
  --exclude "*" --include "*.js" \
  --content-type "application/javascript" \
  --profile=$NAMED_PROFILE

echo "Invalidating CloudFront cache for distribution $CLOUDFRONT_DISTRIBUTION_ID"
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
  --paths "/*" \
  --profile=$NAMED_PROFILE

echo ""
echo "Deployment complete for $SITE_NAME"
