Let $f:\{ -1,1 \}^{n}\to \mathbb{C}$ with [[Analysis of Boolean Functions/Discrete Fourier Transform on the Biased Cube]] $\hat{f}:\mathcal{P}([n])\to \mathbb{C}$
By [[Analysis of Boolean Functions/Discrete Fourier Transform]] inversion formula:
$$
f(x) = \sum_{A\subseteq[n]} \hat{f}(A)\phi_{A}
$$
The degree of $f$ is 
$$
\max\{ \lvert A \rvert : \hat{f}(A)\neq 0 \}
$$
Note that the inversion formula lets us expand the domain of $f$ from $\{ -1,1 \}^{n}$ to $\mathbb{R}^{n}$, 
as a multilinear (actually multiaffine) function.
The degree of $f$ is then the same as the degree of this multilinear polynomial.
#### Lemma
For every $f:\{ -1,1 \}^{n}\to \mathbb{R}$ there is a unique multilinear $\mu:\mathbb{R}^{n}\to \mathbb{R}$ such that $\mu|_{\{ -1,1 \}^{n}}=f$.
##### Proof
Existence is clear by the inversion formula.
Now suppose $\mu$ is multilinear and vanishes on $\{ -1,1 \}^{n}$.
Show this by induction on $n$.
If $\mu(-1)=\mu(1)=0$ the result is clear.
Now assume the result for $n-1$ and let $\mu:\mathbb{R}^{n}\to \mathbb{R}$ vanish on $\{ -1,1 \}^{n}$.
Then for all $x\in \mathbb{R}^{n-1}$ we can write 
$$
\mu(x,t) =\alpha(x)t+\beta(x)
$$
Also $\mu(x,0)=\beta(x)$ so $\beta$ is multilinear.
Thus write 
$$
\beta(x) = \frac{\mu(x,1)-\mu(x,-1)}{2}
$$
Let $x\in \{ -1,1 \}^{n}$.
Then clearly $\beta(x)=0$ so by induction hypothesis $\beta \equiv 0$.
Now $\mu(x,t)=\alpha(x)t$. 
Setting $t=1$, we find that $\alpha\equiv 0$.


