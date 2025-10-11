## Newton's method
It uses a descent with the following step:
$x_{t+1}=x_t-(\nabla^2 f(x_t))^{-1}\nabla f(x_t)$
Computationally heavy as you need to calculate the hessian all the time.

#### Why that step:
$f(x)=f(x_0)+(x-x_0)^T\nabla f(x_0) + \frac{1}{2}(x-x_0)^T\nabla^2 f(x_0)(x-x_0)$
This is some quadratic - we find the minimum of it.
Take gradient and set to zero [[XNotes/First-order condition#Minimum]]

$$\nabla_x (f(x_0)+(x-x_0)^T\nabla f(x_0) + \frac{1}{2}(x-x_0)^T\nabla^2f(x_0)(x-x_0))=\nabla f(x_0) + \nabla^2 f(x_0)(x-x_0)$$
Setting this to zero gives: $$x=x_0 - (\nabla^2 f(x_0))^{-1}\nabla f(x_0)$$
In 1-dimension, Newton's method is a way for solving $f'(x)=0$. Let $f'(x)=g(x)$.
$x_{t+1}=x_t-\frac{f'(x_t)}{f''(x_t)}=x_t-\frac{g(x)}{g'(x)}$

### Theorem:
Let $f$ be an [[Analysis/Alpha-strongly convex]] function. Let $\nabla^2f(x)$ be [[XNotes/l-lipshitz]]. then Newton's method satisfies the bound:
$$f(x_k)-f(x^*)\leq \frac{2\alpha^3}{l^2}(\frac{l}{2\alpha^2}||\nabla f(x_0)||)^{2^{k+1}}$$
#### Remark:
This is exponentially faster than gradient descent. But needs more memory so it's not used for high dimensions.

#### Proof: 
NON EXAMINABLE!!!
And apparently not very illuminating - just some algebra