# 📸 Adding Your Profile Image

## Quick Setup

1. **Save your image** as `profile-image.jpg` in the `public` folder
   - Recommended size: 600x600px or larger (square format works best)
   - Supported formats: JPG, PNG, WebP

2. **File location:**
   ```
   portfolio/
   └── public/
       └── profile-image.jpg  ← Place your image here
   ```

3. **The image will automatically appear** in the About section

## Alternative: Using a Different Image Name

If you want to use a different filename or format:

1. Edit `src/components/About.tsx`
2. Find this line:
   ```tsx
   <img src="/profile-image.jpg" alt="Touani Giovanni Larry" />
   ```
3. Change `/profile-image.jpg` to your image path:
   ```tsx
   <img src="/your-image-name.jpg" alt="Touani Giovanni Larry" />
   ```

## Image Optimization Tips

- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Size**: Keep file size under 500KB for faster loading
- **Dimensions**: Square images (1:1 ratio) work best for the circular frame
- **Quality**: Use high quality but optimize for web

## Online Image Optimization Tools

- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim: https://imageoptim.com/

---

**Note**: If the image doesn't load, a placeholder will automatically appear with instructions.

