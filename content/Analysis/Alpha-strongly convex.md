A function $f:R^n\rightarrow R$ is $\alpha-strongly\ convex$ if $\nabla^2f(x)\succeq \alpha I$

Note that by [[Analysis/Second-order condition]], $f$ is then also a [[Analysis/Convex Function]]

All eigenvalues of $\nabla^2f(x)$ are $\geq\alpha$

### Theorem:
Let $f$ be $\alpha-strongly\ convex$. If $x*$ is the minimiser of $f$, then $f(x)\geq f(x*)\geq f(x)-\frac{||\nabla f(x)||^2}{2\alpha}.$
#### Proof:
Observe that 
$f(y)\geq f(x)+(y-x)^T\nabla f(x) +\frac{\alpha}{2}||x-y||^2$
by using Taylor's theorem.
$min_y f(y)\geq min_y (\dots)$
$f(x*)\geq f(x)-\frac{1}{2\alpha}||\nabla f(x)||^2$