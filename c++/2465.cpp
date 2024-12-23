#include <vector>
#include <set>
#include <algorithm>
using namespace std;


class Solution {
public:
    int distinctAverages(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        set<double> averages;
        while (!nums.empty()) {
            int min = nums.front();
            nums.erase(nums.begin());
            int max = nums.back();
            nums.pop_back();
            averages.insert((min + max) / 2.0);
        }
        return averages.size();
    }
};