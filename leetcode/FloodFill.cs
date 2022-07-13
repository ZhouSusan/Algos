public class Solution {
    public int[][] FloodFill(int[][] image, int sr, int sc, int color) {
        int oldColor = image[sr][sc];
        
        if (color == oldColor)
        {
            return image;
        }
        
        image[sr][sc] = color;
        
        if (sr > 0 && image[sr-1][sc] == oldColor)
        {
            FloodFill(image, sr-1, sc, color);
        }
        
        if (sr+1 < image.Length && image[sr+1][sc] == oldColor) {
            FloodFill(image, sr+1, sc, color);
        }
        
        if (sc > 0 && image[sr][sc-1] == oldColor) {
            FloodFill(image, sr, sc-1, color);
        }
        
        if (sc+ 1 < image[sr].Length && image[sr][sc+1] == oldColor) {
            FloodFill(image, sr, sc+1, color);
        }
        
        return image;
    }
}