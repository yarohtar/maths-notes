Let $m,r\in \mathbb{N}$. 
Then there is some $n\in \mathbb{N}$ 
such that whenever $[n]^{(r)}$ is $2$-coloured,
there is a monochromatic set $M\in[n]^{(m)}$.
### Proof
Suppose not.
For each $n\geq r$, there is a colouring $c_{n}:[n]^{(r)}\to [2]$
with no monochromatic $m$-set.

Now there are only finitely many colourings of $[k]^{(r)}$, 
so for each $k$, infinitely many of $c_{k},c_{k+1},\dots$ must agree on $[k]^{(r)}$.
Thus construct a sequence of colourings $d_{n}:[n]^{(r)}\to[2]$ 
such that $d_{n+1}$ and $d_{n}$ agree on $[n]$,
and any $d_{n}$ doesn't have a monochromatic $m$-set.
Finally, take the limiting colouring $d=\lim_{n\to \infty}d_{n}$ 
and apply [[Combinatorics/Ramsey/Ramsey's Theorem]].
