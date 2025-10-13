From a complicated function $f(x)$, 
we want to find a simpler $g(x)$ s.t. $f\sim g$.  
Want to break up $g$ into a hierarchy of approximations s.t.
$$g(x)=\sum_{k=0}^{N} a_{k}\phi_{k}(x)$$
where $\phi_{k}(x)$ are very simple and relative sizes of $\phi_{k}$ are known.

### Definition
Suppose we have an [[Asymptotic Methods/Asymptotic Approximation]] which holds for all $N$. 
Then we have an asymptotic series and we write:
$$
f(x)\sim \sum_{k=0}^{\infty} a_{k}\phi_{k}(x)
$$
We make NO CLAIMS about this converging !!!!
We never fix $x$ and let $N\to \infty$.

#### Caution
For functions $\phi$ that have infinitely many zeros as the limit is taken, 
this definition has problems, because we are dividing by 0. 
However, we will still be approximating with them (???). 
Example:
$$
J_{0}(x)\text{ "}\sim\text{" }\sqrt{ \frac{2}{\pi x} }\cos\left( x-\frac{\pi}{4} \right)
$$
### Properties
Let $f\sim \sum a_{k}\phi_{k}$ and $g\sim \sum b_{k}\phi_{k}$
- Linearity: $\alpha f+\beta g\sim \sum(\alpha a_{k}+\beta_{bk})\phi_{k}$
- Multiplication: Consider $\phi_{k}=(x-a)^k$
  Then $fg\sim \sum c_{k}\phi_{k}$ where $c_{k}=\sum a_{j}b_{{k-j}}$
- Division is possible but we don't really use it
- Integrating term by term is usually ok
- Differentiating term by term is usually NOT ok
- If $\phi_{k}$ and $\psi_{k}$ are different asymptotic sequences as $x\to x_{0}$ 
  and suppose they both approximate $f$, 
  then the coefficients are not the same 
- $a_{k}$ are unique, moreover: 
  $$
  \begin{gather}
a_{0}=\lim_{ x \to x_{0} } \frac{f(x)}{\phi_{0}(x)}
a_{n}=\lim_{ x \to x_{0} } \left( f(x)-\sum_{k=0}^{n-1} a_{k}\phi_{k}\over\phi_{n}(x) \right)
\end{gather}
$$
- An asymptotic expansion doesn't uniquely determine the function
## Complex expansions
Typically, $z\in \mathbb{C}$ must be restricted to a sector of $\mathbb{C}$ around $z_{0}$.
Approaching $z_{0}$ from different directions can give different approximations
(even for analytic functions).
This is called Stokes phenomenon
We divide $\mathbb{C}$ into special sectors in which different [[Asymptotic Methods/Asymptotic Approximation\|asymptotic approximations]] hold. 
Their boundaries are called Stokes lines 
(sometimes they are called anti Stokes lines).