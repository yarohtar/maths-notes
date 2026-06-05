Let $m,k\in \mathbb{N}$.
Then there is some $n\in \mathbb{N}$ such  that whenever $[n]$ is $k$-coloured,
there exists a monochromatic arithmetic progression of length $m$,
whose difference $d$ is of the same colour.
### Proof
Let $n$ be suitable for $k-1$.
We show that the [[Combinatorics/Ramsey/Waerden's Number]] $W(n(m-1)+1, k)$ is suitable for $k$.
By definition, take $a,a+d,a+2d, \dots,a+n(m-1)d$ monochromatic.
If any of $d,2d,\dots,nd$ are the same colour as this sequence, we are done.
Otherwise, this sequence is $(k-1)$-coloured, 
so we are done by induction hypothesis.