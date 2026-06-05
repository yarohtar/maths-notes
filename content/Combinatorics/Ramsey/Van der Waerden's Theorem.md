Let $m,k\in \mathbb{N}$.
Then there is some $n\in \mathbb{N}$ such  that whenever $[n]$ is $k$-coloured,
there exists a monochromatic arithmetic progression of length $m$.
In particular, the [[Combinatorics/Ramsey/Waerden's Number]] $W(m,k)$ exists.
### Proof
We proceed by induction on $m$.
The case $m=1$ is trivial. 
Suppose we have proved the claim for $m-1$,
and assume there is no monochromatic progression of length $m$.
We show the following claim:
For all $r\leq k$, there exists some $n$ such that whenever $[n]$ is $k$-coloured,
there exist $r$ [[Combinatorics/Ramsey/Colour-Focused]] arithmetic progressions of length $m-1$.
We do an induction on $r$.
For $r=1$, we can set $n=W(m-1,k)$.
Now assume that $n$ is suitable for $r-1$. 
We claim that $2n \cdot W(m-1,k^{2n})$ is suitable for $r$.
Split $[2n\cdot W(m-1,k^{2n})]$ into $W(m-1,k^{2n})$ blocks of size $2n$. 
There is $k^{2n}$ ways to colour a block, 
so we can find $B_{s},B_{s+t},\dots,B_{s+(m-2)t}$ identically coloured. 
Now the first half of $B_{s}$ has $r-1$ [[Combinatorics/Ramsey/Colour-Focused]] progressions $A_{1},\dots,A_{r-1}$
of length $m-1$
As the length of $B_{s}$ is $2n$, the focus $f$ of these progressions is also in $B_{s}$.
Now consider the progressions $A_{i}'=\{ a_{i}+j(d_{i}+2nt) \}$. 
They are [[Combinatorics/Ramsey/Colour-Focused]] at $f+2nt(m-1)$.
But so is $f,f+2nt, \dots,f+2nt(m-2)$, which is also monochromatic,
but $f$ is a different colour from all the other ones.
Thus we found the $r$ [[Combinatorics/Ramsey/Colour-Focused]] progressions.

This completes the proof, as applying the claim for $r=k$ gives a contradiction.