$I=[0,1]$
### Definition (homotopy)
$f,g:X\to Y$ maps. A homotopy from $f$ to $g$ is a map $H:X\times I\to Y$ s.t. $H(x,0)=f(x)$ and $H(x,1)=g(x)$. If it exists, $f$ is homotopic to $g$, $f\simeq g$ or $f\simeq_H g$. 

$A\subset X$. The homotopy $H$ is relative to $A$ if additionally $H(a,t)=f(a)=g(a)$ for all $a\in A, t\in I$.

### Proposition
The relation "homotopic relative to set $A$" on the set of all maps from $X$ to $Y$ is an equivalence relation (any $X,Y,A\subset X$).
#### Proof
Standard, use [[Analysis/Gluing lemma]] for transitivity

### Definition (homotopy-equivalence)
A map $f:X\to Y$ is a homotopy-equivalence if there is a map $g:Y\to X$ s.t. $g\circ f\simeq id_{X}$ and $f\circ g \simeq id_Y$. 
$X$ is homotopy equivalent to $Y$ if such $f$ exists.

### Example
$X=S^1$, $Y=\mathbb R^2\setminus\{0\}$
Take $r:Y\to X$ with $x\to x/|x|$. 
Take $g:X\to Y$ to be the identity (ie $x\to x$)
One direction is easy.
For the other one, set $H(x,t)=x/(t+|x|(1-t))$. 
Hence $X\simeq Y$.

[[Homotopy/Contractible Space]]

### Lemma
Suppose $f_0, f_1: X\to Y$ maps with $f_0\simeq_H f_1$ and $g_0,g_1:Y\to Z$ maps with $g_0\simeq_Gg_1$ 
Then $g_0\circ f_0\simeq g_1\circ f_1$
#### Proof
Note $g_0\circ f_0\simeq_{g_0\circ H} g_0 \circ f_1$
Also $g_1\circ f_1\simeq_{G\circ(f_1\times id)}g_0\circ f_1$
Done.

### Proposition
The relation of homotopy equivalence between spaces is an equivalence relation.

[[Homotopy/Retraction map]]
[[Homotopy/Deformation retraction map]]