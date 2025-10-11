Suppose we want to minimize a convex $f$ subject to $g(x)\leq b$. We introduce barrier functions in order to enforce the constraint:
$$h_\epsilon(x)=f(x)-\epsilon\sum_{i=1}^m\log(b_i-g_i(x))$$
Now $g(x)$ stays away from $b$ because $\log$ would blow up. 

## Theorem
Let $x^*$ minimize $f$ subject to $g(x)\leq b$ and let $x_\epsilon$ minimize $h_\epsilon$. Then:

$$0\leq f(x_\epsilon)-f(x^*)\leq m\epsilon$$
where $m$ is the number of constraints.

### The method:
1. Pick some $\epsilon$ and a feasible $x_0$ 
2. Find the minimum of $h_\epsilon$ using favourite [[Numerical/Convex optimisation]] method
3. make $\epsilon$ smaller and repeat until satisfied.