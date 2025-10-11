OLD VERSION
SEE [[XNotes/Lagrange multipliers]]


We want to minimize $f(x)$ s.t. $h(x)=b$ and $x\in X$

## The theorem
[[XNotes/Lagrange sufficiency theorem]]

## The method
Given a question of the form:
Minimize $f(x)$
s.t. $h(x)\leq b,\ x\in X$
Do the following steps:
1. Add the slack variable $s\geq 0$ to get rid of the inequalities.
	$h(x)+s=b$
2. Set $L(x,s,\lambda) = f(x) - \lambda^T(h(x)+s-b)$
3. Let $\Omega = \{\lambda\in R^m : \inf_{x\in X, s\geq 0}L(x,s,\lambda)\neq -\infty\}$
4. For each $\lambda\in\Omega$, find $x^*(\lambda)$ and $s^*(\lambda)$ needed to minimize $L(x,s,\lambda)$ 
5. Find $\lambda^*\in\Omega$ s.t. $(x^*(\lambda*), s^*(\lambda*))$ is feasible i.e.
	$h(x^*(\lambda^*)) + s^*(\lambda^*)=b$
	$x^*(\lambda^*)\in X$
	$s^*(\lambda^*)\geq 0$
	Then this $x^*$ is the solution.
Note that this method is not guaranteed to work, as sometimes no $\lambda$ will suffice.
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
Now apply LST to this.

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
That is a feasible solution so by LST we are done.
#
[[Numerical/Complimentary slackness]]

[[XNotes/When does Lagrange method work]]

[[XNotes/Economist perspective]]
