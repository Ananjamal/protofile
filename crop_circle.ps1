
Add-Type -AssemblyName System.Drawing

$sourcePath = "c:\Users\AL\Desktop\protofile\assets\images\ananPro.png"
$destPath = "c:\Users\AL\Desktop\protofile\assets\images\ananCircle.png"

# Load image
$image = [System.Drawing.Image]::FromFile($sourcePath)
$width = $image.Width
$height = $image.Height
$size = [Math]::Min($width, $height)

# Create new bitmap with transparency
$bitmap = New-Object System.Drawing.Bitmap($size, $size)
$graph = [System.Drawing.Graphics]::FromImage($bitmap)

# Set high quality
$graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Create circular path
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$graph.SetClip($path)

# Draw image centered
$x = ($width - $size) / 2
$y = ($height - $size) / 2
$srcRect = New-Object System.Drawing.Rectangle($x, $y, $size, $size)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)

$graph.DrawImage($image, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

# Save
$bitmap.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Cleanup
$graph.Dispose()
$bitmap.Dispose()
$image.Dispose()

Write-Host "Image cropped successfully to $destPath"
