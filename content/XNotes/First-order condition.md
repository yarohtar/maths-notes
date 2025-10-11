
## First-order condition

$f$ [[Analysis/Convex Function]]

$f(y)\geq f(x)+f'(x)(y-x)$
In $R^n$ this would be: 
$f(y)\geq f(x)+(y-x)^T\nabla f(x)$

### Theorem:
Let $f:R^n\rightarrow R$ be differentiable. Then $f$ is convex if and only if 
$f(y)\geq f(x)+(y-x)^T\nabla f(x)$
for all $x,y\in R^n$
#### Proof:
Let $f$ be convex.
###### Suppose $n=1$.
$x_t = (1-t)x+ty$ where $t\in (0,1)$
Convex:
$f(y)\geq \frac{f(x_k)-(1-t)f(x)}{t}= f(x)+\frac{f(x_t)-f(x)}{t}$
Take limit as $t\rightarrow 0$:
$f(y)\geq f(x)+(y-x)f'(x)$

###### Now suppose $n>1$
Set $g(t)=f((1-t)x+ty)$ convex. Use $n=1$
$g(1)\geq g(0)+g'(0)$

##### The other direction
Let $x\leq x_t\leq y$
Using first-order condition
$f(x)\geq f(x_t) + (x-x_t)^T\nabla f(x_t)$
$f(y)\geq f(x_t) + (y-x_t)^T\nabla f(x_t)$
Weighted sum completes.

###### Minimum
Note that if $\nabla f(x)=0$ for a convex function $f$, then $x$ is the minimum.