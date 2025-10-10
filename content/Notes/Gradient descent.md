## Gradient descent
Intuition: 
$$\begin{align}f(x-\epsilon\nabla f(x))&\approx f(x)-\epsilon\nabla f(x)^T\nabla f(x) \\&= f(x)-\epsilon||\nabla f(x)||^2\end{align}$$
so we reduced $f$

### The Algorithm:
1. Start at some $x_0$
	For all $t\geq 0$ do:
2. Make a step
	- Identify a descent direction $V_t$
	- Set a step-size $\eta_t$
	- $x_{t+1}=x_t+\eta_tV_t$
3. Stop when some crieria hold.

Usual assumptions in literature are [[Notes/Beta-smooth]] and [[Notes/Alpha-strongly convex]]

Now we analyse gradient descent with the update $x_{t+1}=x_t-\frac{1}{\beta}\nabla f(x)$.

### Theorem:
For the above version of gradient descent
$f(x_t)-f(x^*)\leq (1-\frac{\alpha}{\beta})^t(f(x_0)-f(x*))\leq e^{-\frac{\alpha t}{\beta}}(f(x_0)-f(x^*))$
#### Proof:
$f(x_{t+1})-f(x^*) \leq f(x_t) - f(x^*)-\frac{||\nabla f(x)||^2}{2\beta}$
$\leq f(x_t)-f(x^*)-\frac{\alpha}{\beta}(f(x_t)-f(x^*))$
$=(1-\frac{\alpha}{\beta})(f(x_t)-f(x^*))$
Using induction, we conclude the result.

The quantity $\frac{\alpha}{\beta}$ is called "condition number" of $f$.

### Example:
$$f(x_1,x_2)=x_1^2+100x_2^2$$
$$\nabla^2 f(x) = \begin{bmatrix}2& 0\\0&200\end{bmatrix}$$
$$2I\preceq \nabla^2f(x)\preceq 200I$$
Condition number of $f$ is now 0.01 which is slow.
To make it faster we can do a change of variables $z_1=10x_2$.
Then the condition number is 1.

