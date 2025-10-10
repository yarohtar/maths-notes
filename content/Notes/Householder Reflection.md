For $u\neq 0$ we define $H_u=I-2{uu^T\over u^Tu}$. It is symmetric and $H_uH_u=I$, so it is orthogonal.

Suppose $a\neq b$ but $||a||=||b||$. Then by picking $u=a-b$, we find:
$$H_ua=b$$
(just expand and pray)

### Note
It is more efficient to calculate $H_uA$ as $A-2{1\over u^Tu}u(u^TA)$ (complexity $O(n^2)$) 
rather than calculating $H_u$ and then multiplying matrices (complexity $O(n^3)$).
