We say that [[Probability/Random Variable]]s $X_{1},X_{2},\dots$ form a Markov Chain if 
$$
\mathbb{P}(X_{n+1}=x_{n+1}|X_{1}^{n}=x_{1}^{n}) = \mathbb{P}(X_{n+1}=x_{n+1}|X_{n}=x_{n})
$$
for any $n\in \mathbb{N}$, and $x_{1}^{n+1}\in \mathbb{R}^{n+1}$ 
That is to say, $X_{n+1}$ depends only on $X_{n}$, and not on anything that came before.
