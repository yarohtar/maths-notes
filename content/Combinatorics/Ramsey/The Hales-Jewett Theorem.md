Let $m,k\in \mathbb{N}$. 
Then there is some $n\in \mathbb{N}$ such that whenever $[m]^{n}$ is $k$-coloured,
there exists a monochromatic [[Combinatorics/Ramsey/Combinatorial Line]].
Write $HJ(m,k)$ for the smallest such $n$.
### Proof
By induction on $m$.
Given $m>1$, assume $HJ(m-1,k)$ exists for all $k$.
Suppose there is no monochromatic line in $[m]^{n}$ for any $n$
We prove for all $r\leq k$ there is some $n$ 
such that $[m]^{n}$ contains $r$ [[Combinatorics/Ramsey/Colour-Focused]] lines.
For $r=1$ set $n=HJ(m-1,k)$.
Given $n$ suitable for $r$, let $n'=HJ(m-1,k^{m^{n}})$.
Identify $[m]^{n+n'}$ with $[m]^{n}\times[m]^{n'}$.
There are $k^{m^{n}}$ ways to colour a copy of $[m]^{n}$.
By choice of $n'$, there is a monochromatic line in $[m-1]^{n'}$,
so extend it to a line $L$ in $[m]^{n'}$.
Now any $a\in[m]^{n}$ has a colour given by this line 
(i.e. for any $b,b'\in L\setminus \{ L^{+} \}$, the colour of $(a,b)$ is the same as of $(a,b')$).
Thus we colour $[m]^{n}$ in $k$ colours induced by the line $L$.
By the choice of $n$, there are $r$ [[Combinatorics/Ramsey/Colour-Focused]] lines in $[m]^{n}$,
under this new colouring, say $L_{1},\dots,L_{r}$ focused at $f$.
This gives $r$ [[Combinatorics/Ramsey/Colour-Focused]] lines $(L_{1},L),\dots,(L_{r},L)$ in $[m]^{n+n'}$.
Moreover, the line $(f,L)$ is also focused at $L^{+}$.
But $f$ is of a different colour from $L_{1},\dots,L_{r}$, 
otherwise we would've had a monochromatic line in $[m]^{n}$. 
This completes the $r$-induction, and the claim follows.




