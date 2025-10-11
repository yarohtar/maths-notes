Let $d\geq 2$ 
$n=2^{d}-1$
Let $H$ be a $d\times n$ matrix whose columns are *all* the nonzero elements of $\mathbb{F}_{2}^{d}$ 
The Hamming $(n,n-d)$ [[XNotes/Linear Code]] is 
the linear code with [[XNotes/Parity Check Matrix]] $H$ (original is $d=3$)
### Lemma
The Hamming $(n,n-d)$ [[XNotes/Linear Code]] $C$ has minimum 
distance $d(C)=3$ and is a [[XNotes/Perfect Code]] $1$ [[XNotes/Error correcting]] code. 
#### Proof
Any $2$ columns of $H$ are linearly independent, 
but there are some $3$ columns that are linearly dependent 
so $d(C)=3$ (see [[XNotes/Parity Check Matrix]] Lemma)
To be perfect, require $\lvert C \rvert=\frac{2^{n}}{V(n,e)}$
Here $n=2^{d}-1$, $e=1$ so it works out 