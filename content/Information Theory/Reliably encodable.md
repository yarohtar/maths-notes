A [[Information Theory/Source]] $\{ X_{n} \}$ taking values in a discrete set $A$
is reliably encodable at rate $r$ 
if for each $n$ 
there is some $B_{n}\subseteq A^{n}$ 
such that:
$$
\begin{gather}
\lim_{n\to \infty} \frac{ \log \lvert B_{n} \rvert  }{ n } = r \\
\\
\text{and} \\
\\
\lim_{n\to \infty}\mathbb{P}(X_{1}^{n}\in B_{n}) = 1

\end{gather}
$$
