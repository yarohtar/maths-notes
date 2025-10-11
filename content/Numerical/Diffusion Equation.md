The diffusion equation is:
$$
\frac{ \partial u }{ \partial t } =\frac{ \partial ^2u }{ \partial ^2x }\quad \quad 0\leq x\leq 1
$$
with some initial conditions $u(x,0)=u_{0}(x)$ 
and Dirichlet boundary conditions $u(0,t)=\phi_{0}(t)$ and $u(1,t)=\phi_{1}(t)$.

## Full discretization
Similar as in [[Numerical/Poisson Equation]]
By Taylor's expansion:
$$
\begin{gather}
\frac{ \partial u }{ \partial t } =\frac{1}{k}[u(x,t+k)-u(x,t)]+O(k)\\
\frac{ \partial ^2u }{ \partial ^2x } =\frac{1}{h^2}[u(x-h,t)-2u(x,t)+u(x+h,t)]+O(h^{2})
\end{gather}
$$
So for the true solution we obtain
$$
u(x,t+k)=u(x,t)+\frac{k}{h^2}[u(x-h,t)-2u(x,t)+u(x+h,t)]+O(k^{2}+kh^{2}s)
$$
Now use $u_{m}^n=u(x_{m},t_{n})$
$$
u_{m}^{n+1}=u_{m}^{n}+\mu(u_{m-1}^n-2u_{m}^n+u_{m+1}^n)
$$
with $h=\frac{1}{M+1}$ and $\mu=\frac{k}{h^2}$ 

A method is convergent if for a fixed $\mu$ and for ever $T>0$ we have
$$
\lim_{ h \to 0 }\lvert u_{m}^n - u(x_{m},t_{n})\rvert  =0 \quad\quad \text{uniformly}
$$
### Theorem
If $\mu\leq \frac{1}{2}$ then this method converges.
#### Proof
We will use $\lVert  \rVert$ for $\lVert  \rVert_{\infty}$. 
We have 
$$
e_{m}^{n+1}=\mu e_{m-1}^n+(1-2\mu)e^n_{m}+\mu e_{m+1}^n+O(h^4)
$$
so we can get
$$
\lVert e^{n+1} \rVert \leq (2\mu+1+\lvert 1-2\mu \rvert )\lVert e^n \rVert +ch^4w
$$
So by $\mu\leq \frac{1}{2}$ we get:
$$
\begin{align}
\lVert e^{n} \rVert &\leq \lVert e^{n-1} \rVert +ch^{4} \\
&\leq nch^{4} \\
&\leq \frac{T}{k}ch^{4} \\
&\leq \frac{T}{\mu}ch^{2}\to 0 \quad \text{as}\quad h\to 0
\end{align}
$$
#### Proof 2
Apply [[Numerical/Lax Equivalence Theorem]].

### Theorem
This method is [[Numerical/Stability of Numerical Methods\|stable]] for $l_{2}$ [[Analysis/L norms\|norm]] iff $\mu\leq \frac{1}{2}$.
#### Proof
Look at eigenvalues of $A_{h}=I+\mu A_{*}$ 
noting that $A_{*}$ is a [[Algebra/TST matrix]] with $\alpha=-2$, $\beta=1$
Eigenvalues of $A_{*}$ are $-4\sin ^{2} \frac{\pi lh}{2}$
Hence the eigenvalues of $A_{h}$ are $\lambda_{l}=1-4\mu\sin^2 \frac{\pi lh}{2}$, 
and if $\mu>\frac{1}{2}$ we will have an eigenvalue of modulus $>1$
(for small enough $h$) which is not stable.

## Semidiscretization (with Euler)
[[Numerical/Semidiscretization]]
Write $u_{m}(t)$ for $u(mh,t)$.
Then we can make the equation into:
$$
\frac{du_{m}}{dt} =\frac{1}{h^{2}}(u_{m-1}-2u_{m}+u_{m+1})
$$
Now we can use the [[Numerical/Euler method]] method to solve this, 
(which yields a full discretization)
but we can also use the [[Numerical/Reverse-Euler Method]] 
which yields:
$$
u^{n+1}_{m}-\mu(u^{n+1}_{m-1}-2u_{m}^{n+1}+u_{m+1}^{n+1})=u_{m}^{n}
$$
Reverse Euler has enhanced stability.
This means that we can pick larger $\mu$ 
i.e. we can have $k\approx h$
Note that for [[Numerical/Reverse-Euler Method]], 
we would need to solve the linear system of equations 
that arises from the implicit method.
## Crank Nicolson scheme
[[Numerical/Crank-Nicolson method]]
Using the [[Numerical/Trapezoidal rule (ODEs)]] after [[Numerical/Semidiscretization]] we get:
$$
u_{m}^{n+1}-\frac{1}{2}\mu(u_{m-1}^{n+1}-2u_{m}^{n+1}+u_{m+1}^{n+1})=u_{m}^{n}+\frac{1}{2}\mu(u_{m-1}^n-2u_{m}^n+u_{m+1}^n)
$$

### Lemma
This method is stable for $\mu>0$.
#### Proof
Define $B=I-\frac{1}{2}\mu A_{*}$ and $C=I+\frac{1}{2}\mu A_{*}$ 
where $A_{*}$ is a [[Algebra/TST matrix]] with $\alpha=-2$, $\beta=1$
Let $A=B^{-1}C$.
Amazingly, $B$ and $C$ have the same set of eigenvectors, 
hence $A$ also does and they are all [[Analysis/Normal Matrix]]
with eigenvalues given by:
$$
\lambda_{k}(A)=\frac{\lambda_{k}(C)}{\lambda_{k}(B)}=\frac{1-2\mu \sin ^{2} \frac{1}{2}\pi kh}{1+2\mu \sin ^{2} \frac{1}{2}\pi kh}\implies \lvert \lambda_{k}(A) \rvert \leq 1
$$
So this method is stable for any $\mu>0$!!! 
### Theorem
This method converges for $\mu>0$.
#### Proof
We can verify that $\eta_{m}^{n}=O(k^{3}+kh^{2})$. 
We also have:
$$
\lVert \eta^{n} \rVert = \left( h\sum_{m}\lvert \eta_{m}^{n} \rvert ^{2} \right)^{1/2} = O(k^{3}+kh^{2})
$$
Hence for the error we have:
$$
Be^{n+1}=Ce^{n}+\eta^{n}
$$
so:
$$
\lVert e^{n+1} \rVert \leq \lVert B^{-1}C \rVert \cdot \lVert e^{n} \rVert + \lVert B^{-1} \rVert \cdot \lVert \eta^{n} \rVert 
$$
All eigenvalues of $B$ are greater than $1$ 
(by [[Analysis/Gershgorin Theorem]])
and we have already seen $\lVert B^{-1}C \rVert\leq 1$ thus:
$$
\lVert e^{n} \rVert \leq \lVert e^{0} \rVert + \sum_{i=0}^{n-1}\lVert \eta^{i} \rVert 
\leq \frac{cT}{k}(k^{3}+kh^{2})=cT(k^{2}+h^{2})
$$
for some $c$.
Thus taking $k=\alpha h$ will result in $O(h^{2})$ error.