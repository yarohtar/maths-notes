### Definition
Having a [[XNotes/Paths\|path]] between two points is an equivalence relation and the equivalence classes are called the path components of $X$.
The set of path components is $\pi_{0}(X)$. If $\pi_{0}(X)=\{ * \}$ then $X$ is path connected.

## Path component map
### Proposition
Given a map $f:X\to Y$, get a well define function:
$$
\begin{align}
\pi_{0}(f):\pi_{0}(X)&\to\pi_{0}(Y) \\
[x]&\to[f(x)]
\end{align}
$$
and it satisfies:
1. $f\simeq g\implies \pi_{0}(f)=\pi_{0}(g)$
2. If $h:X\to Y$ and $k:Y\to Z$ are maps then $\pi_{0}(kh)=\pi_{0}(k)\pi_{0}(h)$
3. $\pi_{0}(id_{X})=id_{\pi_{0}(X)}$
#### Proof
Firstly, well defined:
$[x]=[x']\in \pi_{0}(X)$
Find $\gamma:x\leadsto x'$
Then $f\circ\gamma:f(x)\leadsto f(x')$ so $[f(x)]=[f(x')]$
(1) Say $f\simeq_{H}g$. Then for any $x\in X$ we have $H(x,\cdot):I\to Y$ a path $f(x)\leadsto g(x)$, so $[f(x)]=[g(x)]\in \pi_{0}(Y)$.
The (2) and (3) are apparently directly from definitions.

### Corollary
If $f:X\to Y$ is a [[XNotes/Homotopy#Definition (homotopy-equivalence)\|homotopy equivalence]] then $\pi_{0}(f):\pi_{0}(X)\to \pi_{0}(Y)$ is a bijection.

#### Proof
Let $g$ be a homotopy inverse of $f$.
$$
\begin{align}
\pi_{0}(f)\pi_{0}(g)&=\pi_{0}(f\circ g) \\
&=\pi_{0}(id_{X}) \\
&=id_{\pi_{0}(X)}
\end{align}
$$
Similarly for other way.

### Example
$D^1=[-1,1]$, $S^0=\{ -1,1 \}$. Suppose there is a retraction $r:D^1\to S^0$ with $r\circ i=id_{S^0}$
Now $\pi_{0}(S^0)=\{ -1,1 \}$, $\pi_{0}(D^1)=\{ * \}$.
Also $\pi_{0}(ri)=\pi_{0}(r)\pi_{0}(i)$, but the first one is a bijection while the second one cannot be because $\pi_{0}(r):\{ * \}\to \{ -1,1 \}$.