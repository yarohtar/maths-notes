A [[Information Theory/Source]] $X_{1},X_{2},\dots$ is stationary if for each $n\geq 1$,
the distribution of $X_{k+1}^{k+n}$ is the same for all $k$.
### Theorem
If $X_{1},X_{2},\dots$ is a stationary source on a finite alphabet $A$,
then the [[Information Theory/Entropy Rate]] exists and is equal to 
$$
H(X) = \lim_{n\to \infty} H(X_{n}\mid X_{1}^{n-1})
$$
Moreover, we can express this as 
$$
H(X) = \lim_{n\to \infty}H(X_{0}\mid X_{-n}^{-1}) = H(X_{0}\mid X_{-\infty}^{-1})
$$
#### Proof
Consider the sequence $H(X_{n}|X_{1}^{n-1})$. 
It is bounded below by $0$, and it is non increasing:
$$
H(X_{n}|X_{1}^{n-1}) \leq H(X_{n}|X_{2}^{n-1}) = H(X_{n-1}|X_{1}^{n-2})
$$
By the [[Information Theory/Entropy Chain Rule]]:
$$
H(X_{1}^{n}) = \sum_{i=1}^{n} H(X_{i}|X_{1}^{i-1})
$$
so the averages converge. 
