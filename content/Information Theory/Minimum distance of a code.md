The minimum distance of a [[Information Theory/Binary Code]] $C$ is the smallest [[Information Theory/Hamming distance]] between distinct codewords.

An $[n,m]$ [[Information Theory/Binary Code]] with minimum distance $d$ is sometimes called $[n,m,d]$

### Lemma
Let $C$ be a code with minimum distance $d$ 
1. Then $C$ is $(d-1)$-[[Information Theory/Error detecting]], but cannot detect $d$ errors
2. $C$ is $\left\lfloor  \frac{d-1}{2}  \right\rfloor$-[[Information Theory/Error correcting]], but cannot correct all sets of $\left\lfloor  \frac{d-1}{2}  \right\rfloor+1$ errors
#### Proof
If $x\in \mathbb{F}_{2}^{n}$ and $c\in C$ with $1\leq d(x,c)\leq d-1$ then $x\not\in C$ so errors detected 
Suppose $c_{1},c_{2}\in C$ with $d(c_{1},c_{2})=d$. Then $c_{1}$ can be corrupted to $c_{2}$ with just $d$ errors, so this set of errors will not be detected.

Let $e=\left\lfloor  \frac{d-1}{2}  \right\rfloor$, so $e\leq \frac{d-1}{2}\leq e+1$
Let $x\in \mathbb{F}_{2}^{n}$. If there is some $c_{1}\in C$ with $d(x,c_{1})\leq e$ we want to show $d(x,c_{2})>e$ for all $c_{2}\in C$ and $c_{2}\neq c_{1}$
By triangle inequality this just works. 
Suppose $c_{1},c_{2}\in C$ with $d(c_{1},c_{2})=d$. Let $x\in \mathbb{F}_{2}^{n}$ differ from $c_{1}$ in precisely $e+1$ places where $c_{1}$ and $c_{2}$ differ. 
Then $d(x,c_{1})=e+1$ while $d(x,c_{2})= d-(e+1)\leq e+1$ so $C$ couldn't correct these errors