[[Notes/Iterative Methods for Linear Algebraic Systems]]
We consider linear, one step, stationary schemes:
$$
x^{k+1}=Hx^{k}+v
$$
We choose $H$ and $v$ such that an exact solution $x^{*}$ satisfies 
$$
x^{*}=Hx^*+v
$$
We call $H$ the iteration matrix.
We want the method to converge for any starting value of $x^{0}$.
So we want $e^k\to 0$ for any $e^0$
So we want $H^ke^0\to 0$ for any $e^0 \in \mathbb{R}^n$
So we want $\rho(H)<1$.

## Iterative refinement
By writing
$$
x^{k+1}=x^{k}-S(Ax^{k}-b)
$$
we see that $S=A^{-1}$ immediately solves the equation. 
So we want to find $S$ which approximates $A^{-1}$. 
This will give an iteration matrix $H_{S}=I-SA$.

### Splitting
Take now:
$$
(A-B)x^{k+1}=-Bx^{k}+b
$$
with the iteration matrix $H=-(A-B)^{-1}B=I-(A-B)^{-1}A$
So we want to approximate $A^{-1}$ with $(A-B)^{-1}$.

[[Notes/Jacobi Method]]
[[Notes/Gauss-Seidel Method]]
[[Notes/The Householder-John Theorem]]
### Relaxation
Suppose we have some $H$ that converges but we want to converge faster
Define $H_{\omega}=\omega H+(1-\omega)I$
We want to find $\omega$ which minimizes $\rho(H_{\omega})$
In general, this is unknown, 
but suppose we know $\sigma(H)$ is real and in the interval $[\alpha,\beta]$
Then we can figure out optimal $\omega$ by "centering" the spectrum around $0$:
$$
-\omega \alpha-(1-\omega) = \omega \beta + (1-\omega)
$$