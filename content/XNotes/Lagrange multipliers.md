Suppose we are minimizing a function $f(x)$ subject to $g(x)=0$. This is equivalent to minimizing the function
$$L(x,\lambda)= f(x) -\lambda g(x)$$
Note that the partial derivative in $\lambda$ will give us the condition $g(x)=0$, so we just need to solve ${\partial L\over \partial x}=0$ and $g(x)=0$. 

# General method
We are minimizing $f(x)$ subject to $x\in X$ and $g(x)\leq b$. The following method works as long as we have [[XNotes/The Necessity Theorem]].
1. Introduce the slack variable $z\geq 0$ s.t. $g(x)+z=b$.
2. Introduce the Lagrangian $L(x,z,\lambda)=f(x)-\lambda^T g(x)+\lambda^T b-\lambda^T z$
3. Find the set $$\Lambda=\{\lambda : \inf_{x\in X,z\geq 0}L(x,z,\lambda) > -\infty\}$$
4. Note that $\lambda\in\Lambda$ has to be $\lambda\leq 0$ because of $-\lambda^Tz$ term.
5. Now find $x^*(\lambda)\in X$ and $z^*(\lambda)\geq 0$ which minimize $L$ for every $\lambda\in\Lambda$
6. Note that $\lambda^Tz^*(\lambda)=0$, this is called complementary slackness
7. Hence, determine $\lambda^*$ such that $x^*$ and $z^*$ are feasible (this might FAIL in which case the method doesn't work)
8. Use [[XNotes/Lagrange sufficiency theorem]] to finalize.
### Example 1 (no slack variable)

Minimize $-x_1-x_2+x_3$
s.t. $x_1^2+x_2^2=4$ and $x_1+x_2+x_3=1$

$L(x,\lambda)=-x_1-x_2+x_3-\lambda_1(x_1^2+x_2^2-4)-\lambda_2(x_1+x_2+x_3-1)$
Rewrite $L(x,\lambda)=((-1-\lambda_2)x_1-\lambda_1x_1^2)  + ((-1-\lambda_2)x_2-\lambda_1x_2^2) + ((1-\lambda_2)x_3)$

Now this cannot go to $-\infty$ so we get:
$\Omega = \{(\lambda_1,\lambda_2):\lambda_1<0,\ \lambda_2 =1\}$

Differentiate $L(x,\lambda)$ w.r.t. each of $x_1,x_2,x_3$, and set to zero to find extreme values:
$-2-2\lambda_1x_1=0\implies x_1=-\frac{1}{\lambda_1}$
$-2-2\lambda_1x_2=0\implies x_2=-\frac{1}{\lambda_1}$

Find $\lambda_1$ s.t. the conditions are satisfied:
$\frac{2}{\lambda_1^2}=4\implies \lambda_1=-\frac{1}{\sqrt2}$

This gives $x_1=\sqrt 2$, $x_2=\sqrt 2$ and $x_3=1-2\sqrt 2$
Now apply [[XNotes/Lagrange sufficiency theorem]] to this.

### Example 2 (slack variable)

Minimize $x_1-3x_2$
s.t. $x_1^2+x_2^2\leq 4$ and $x_1+x_2\leq 2$

Add slack variables:
$x_1^2+x_2^2+s_1=4,\ x_1+x_2+s_2=2$ and $s_1,s_2\geq 0$

Write $L(x,s,\lambda)=((1-\lambda_2)x_1-\lambda_1x_1^2) + ((-3-\lambda_2)x_2-\lambda_1x_2^2)-\lambda_1s_1-\lambda_2s_2+4\lambda_1+2\lambda_2$
Terms $-\lambda_1s_1$ and $-\lambda_2s_2$ give that $\lambda_1,\lambda_2\leq 0$

Differentiating w.r.t. $x_1,x_2$:
$(1-\lambda_2)-2\lambda_1x_1=0$
$(-3-\lambda_2)-2\lambda_1x_2=0$
If $\lambda_1=0$, this system is inconsistent, so $\lambda_1<0$. This means $s_1=0$ in order to minimize $-\lambda_1s_1$

NOTE: Here we are minimizing $L(x,s,\lambda)$ as if $x,s,\lambda$ are all INDEPENDENT! That is why we can say the previous line. Later we should check if there is a $\lambda$ such that the minimum is feasible.

Now we have two cases: $\lambda_2<0$ and $\lambda_2=0$. First case does not yield a feasible minimum. In the second case we are just solving:
$1-2\lambda_1x_1=0$
$-3-2\lambda_1x_2=0$
$x_1^2+x_2^2=4$
$x_1+x_2+s_2=2$

This should yield $(\lambda_1,\lambda_2)=(-\sqrt\frac{5}{8},0)$, $(x_1,x_2)=(-\sqrt\frac{2}{5},3\sqrt\frac{2}{5})$, $(s_1,s_2)=(0,2-2\sqrt\frac 2 5)$
That is a feasible solution so by [[XNotes/Lagrange sufficiency theorem]] we are done.





# Functionals and Lagrange multipliers

Suppose we are minimizing $F[x]=\int f(t,x,\dot x) dt$ subject to $G[x]=\int g(t,x,\dot x) dt =C$. This is equivalent to minimizing:

$$L[x,\lambda]=\int (f(t,x,\dot x)-\lambda g(t,x,\dot x))dt+\lambda C$$
Note that here $\lambda$ does not depend on $t$ because we are only taking $F[x]-\lambda (G[x]-C)$. On the other hand, suppose the condition was $g(t,x,\dot x)=0$. Then we want to minimize:

$$L[x,\lambda]=\int (f(t,x,\dot x)-\lambda(t) g(t,x,\dot x))dt$$
This way, the [[XNotes/Euler-Lagrange]] for the function $\lambda(t)$ will give condition $g(t,x,\dot x)=0$. 