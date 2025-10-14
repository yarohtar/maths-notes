Let $f:U\to \mathbb{C}$ be a function where $U\subseteq \mathbb{C}$
We say that $f$ is complex differentiable at $z_{0}\in U$ 
if there is some constant $f'(z_{0})\in \mathbb{C}$ and we can write:
$$
f(z)=f(z_{0}) + (z-z_{0})f'(z_{0}) + o( z-z_{0} )
$$
as $z\to z_{0}$ (i.e. $\lvert z-z_{0} \rvert \to 0$)
We say that $f'(z_{0})$ is the complex derivative of $f$ at $z_{0}$
We can check that $f'(z_{0})$ is unique (if it exists)
We can then write:
$$
f'(z_{0}) = \lim_{ z \to z_{0} } \frac{ f(z)-f(z_{0}) }{ z-z_{0} }
$$
### Example
The function $f(z)=\lvert z \rvert ^{2}=zz^{*}$ is complex differentiable at $0$ 
with complex derivative $f'(0)=0$
It is not differentiable anywhere else.
#### Proof
Let $z_{0}=x_{0}+iy_{0}$ and $z=x+iy$
Then $f(z)=x^{2}+y^{2}$ and suppose derivative $f'(z_{0})$ exists
Then:
$$
x^{2}+y^{2}=x_{0}^{2}+y_{0}^{2} + (x-x_{0})f'(z_{0}) + i(y-y_{0})f'(z_{0}) + o(z-z_{0})
$$
Try first $x=x_{0}$ and $y\to y_{0}$:
$$
y^{2}-y_{0}^{2}=i(y-y_{0})f'(z_{0}) + o(z-z_{0})
$$
Thus we find $f'(z_{0})$ ought to be $-2iy_{0}$ if it exists
Try now $x \to x_{0}$ and $y=y_{0}$:
$$
x^{2}-x_{0}^{2}=(x-x_{0})f'(z_{0}) + o(z-z_{0})
$$
So $f'(z_{0})$ ought to be $2x_{0}$ if it exists.
So we find $x_{0}=-iy_{0}$



