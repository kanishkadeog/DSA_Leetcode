import bisect

class Solution(object):
    def maxDistance(self, side, points, k):
        n = len(points)

        # map to perimeter
        arr = []
        for x, y in points:
            if y == 0:
                pos = x
            elif x == side:
                pos = side + y
            elif y == side:
                pos = 3 * side - x
            else:
                pos = 4 * side - y
            arr.append((pos, x, y))

        arr.sort()
        per = 4 * side

        # duplicate
        ext = arr + [(p + per, x, y) for (p, x, y) in arr]
        pos = [p for p, _, _ in ext]

        # binary search
        l, r = 0, 2 * side
        ans = 0

        while l <= r:
            mid = (l + r) // 2
            if self.can(ext, pos, n, k, mid):
                ans = mid
                l = mid + 1
            else:
                r = mid - 1

        return ans

    def can(self, arr, pos, n, k, d):
        for i in range(n):
            selected = [arr[i]]
            curr = i

            while True:
                # pruning
                if len(selected) + (i + n - curr - 1) < k:
                    break

                # next candidate by perimeter gap
                target = arr[curr][0] + d
                nxt = bisect.bisect_left(pos, target, curr + 1, i + n)

                if nxt >= i + n:
                    break

                x2, y2 = arr[nxt][1], arr[nxt][2]

                ok = True
                for _, x1, y1 in selected:
                    if abs(x1 - x2) + abs(y1 - y2) < d:
                        ok = False
                        break

                if ok:
                    selected.append(arr[nxt])
                    curr = nxt
                    if len(selected) >= k:
                        return True
                else:
                    curr = nxt

        return False
        