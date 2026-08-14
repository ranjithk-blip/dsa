class Solution {
    public String longestPalindrome(String s) {

        int start = 0;
        int maxLength = 1;

        for (int i = 0; i < s.length(); i++) {

            int odd = expandAroundCenter(s, i, i);
            int even = expandAroundCenter(s, i, i + 1);

            int len = Math.max(odd, even);

            if (len > maxLength) {

                maxLength = len;

                start = i - (len - 1) / 2;
            }
        }

        return s.substring(start, start + maxLength);
    }

    private int expandAroundCenter(String s, int left, int right) {

        while (left >= 0 &&
               right < s.length() &&
               s.charAt(left) == s.charAt(right)) {

            left--;
            right++;
        }

        return right - left - 1;
    }
}