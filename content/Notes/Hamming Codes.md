Let $d\geq 2$ 
$n=2^{d}-1$
Let $H$ be a $d\times n$ matrix whose columns are *all* the nonzero elements of $\mathbb{F}_{2}^{d}$ 
The Hamming $(n,n-d)$ [[Notes/Linear Code]] is 
the linear code with [[Notes/Parity Check Matrix]] $H$ (original is $d=3$)
### Lemma
The Hamming $(n,n-d)$ [[Notes/Linear Code]] $C$ has minimum 
distance $d(C)=3$ and is a [[Notes/Perfect Code]] $1$ [[Notes/Error correcting]] code. 
#### Proof
Any $2$ columns of $H$ are linearly independent, 
but there are some $3$ columns that are linearly dependent 
so $d(C)=3$ (see [[Notes/Parity Check Matrix]] Lemma)
To be perfect, require $\lvert C \rvert=\frac{2^{n}}{V(n,e)}$
Here $n=2^{d}-1$, $e=1$ so it works out 