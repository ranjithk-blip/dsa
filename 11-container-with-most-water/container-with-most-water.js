/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let max=0;
    while(left<right)
    { let w=right -left;
     let h=Math.min(height[left],height[right]);
     let area=h*w;
     max=Math.max(max,area);
     if(height[left]<height[right])
     {
        left++;
     }
     else if(height[left]>height[right])
     {
        right--
     }
     else
     {
        left++;
        right--;
     }

    }
    return max;

    
};