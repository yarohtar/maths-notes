A [[Notes/Covering Spaces\|covering]] map $p:\tilde{X}\to X$ is a universal cover if $\tilde{X}$ is [[Notes/Simply connected]].


### Theorem
Let $X$ be path connected (1), [[Notes/Locally Path Connected]] (2), and [[Notes/Semi-locally Simply Connected]] (3). Then there exists a covering $p:\tilde{X}\to X$ with $\tilde{X}$ simply connected.

#### Proof (NONEXAMINABLE)
Fix $x_{0}\in X$.
Define aas a set:
$$
\tilde{X}=\{ \text{paths in } X \text{ starting at }x_{0} \text{ and ending anywhere up to htpy of paths} \}
$$
$p:\tilde{X}\to X$ with $[\gamma]\to \gamma(1)$
Need topology on $\tilde{X}$ st 
1. $p$ cts
2. $p$ covering map
3. $\tilde{X}$ simply connected
##### Step 0
Topology on $X$, revisited.
$$\mathcal{U}=\{ U\in X: U \text{ open in } X \text{ and } U \text{ path-connected and } \pi_{1}(U,x)\to \pi_{1}(X,x) \text{trivial for all }x\}$$

##### Claim 0
$\mathcal{U}$ basis for rthe topology on $X$
###### Proof
Assume $V\subseteq X$ open and $x\in V$. Need $U\in \mathcal{U}$ st $x\in U\subseteq V$
- $X$ is semilocally simply connected so there is some $U'$ open with $x\in U'$ st $\pi_{1}(U',x)\to \pi_{1}(X,x)$ trivial
- $X$ locally path-connected $\implies$ there is some $U$ open, path-connected st $x\in U\subseteq U'\cap V$
- Have $U\subseteq U'\subseteq X$ inducing 
$$
\pi_{1}(U,x)\to \pi_{1}(U',x)\to \pi_{1}(X,x)
$$
Second map has image 0, so composition has to be trivial.
Still need: $\pi_{1}(U,y)\to \pi_{1}(X,y)$ trivial for all $y\in U$.
Given a $y\in U$ pick a path $\gamma:x\leadsto y$ in $U$.
Then the following commutes:

```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
\pi_1(U,x) \arrow[r,"0"] \arrow[d,"Y_{\#}"] & \pi_1(X,x)\arrow[d,"Y_{\#}"]\\
\pi_1(U,y)\arrow[r] & \pi_1(X,y)
\end{tikzcd}
\end{document}
```

##### Step 1
Topology on $\tilde{X}$. For $[\alpha]\in \tilde{X}$, and $U\in \mathcal{U}$, define:
$$
([\alpha],U)=\{ [\beta]\in \tilde{X}:[\beta]=[\alpha \cdot \alpha'], \text{some path in }U\text{ starting at }\alpha(1) \}
$$
Let $\tilde{U}$ be the sellection of all these.
##### Claim 1
$\tilde{U}$ is a basis for a topology on $\tilde{X}$ (which we'll then use)
###### Proof
Assume $[\beta]\in([\alpha_{0}],U_{0})\cap([\alpha_{1}],U_{1})$ where $([\alpha_{i}],U_{i})\in \tilde{U}$
Need: $([\alpha_{2}],U_{2})\in \tilde{U}$ st $[\beta]\in([\alpha_{2}],U_{2})\subseteq([\alpha_{0}],U_{0})\cap([\alpha_{1}],U_{1})$
Fix $W\in \mathcal{U}$ st $\beta(1)\in W$ and $W\in U_{0}\cap U_{1}$
Now choosing $\alpha_{2}=\beta$ and $U_{2}=W$ for above works.
##### Step 2
Check this topology has the desired properties.
##### Claim 2.1
$p:\tilde{X}\to X$ with $[\gamma]\to \gamma(1)$ is cts
###### Proof
Suppose $U\in \mathcal{U}$, $[\alpha]\in p ^{-1}(U)$. Then $([\alpha],U)\subseteq p ^{-1}(U)$ and $([\alpha],U)\in \tilde{U}$ so $p ^{-1}(U)$ open.
2. $p$ is a covering map?
##### Claim 2.2.1
$p\mid_{([\alpha],U)}:([\alpha],U)\to U$ homeomorphism
###### Proof
$p$ cts, $p(([\beta],V))=V$ so $p$ is open map.
- surjective? $U$ is path-connected so for all $x\in U$ there is a path $\gamma:\alpha(1)\leadsto x$ in $U$ 
Now $[\alpha \cdot \gamma]\in([\alpha],U)$ and $p[\alpha \cdot \gamma]=x$
- injective? Assume $[\beta],[\beta']\in([\alpha],U)$ st $\beta(1)=\beta'(1)$ (ie same image under $p$)
Have $\gamma,\gamma'$ paths in $U$ starting at $\alpha(1)$ and ending at $\beta(1)=\beta'(1)$ st $[\beta]=[\alpha \cdot \gamma]$ and $[\beta']=[\alpha \cdot \gamma']$
Now $[\beta \cdot[(\beta')^{-1}]]=[\gamma \cdot(\gamma')^{-1}]=0\in \pi_{1}(X,x_{0})$ hence $[\beta]=[\beta']$
##### Claim 2.2.2
Suppose $([\alpha],U), ([\beta],U)\subseteq p ^{-1}(U)$. Then these are equal or disjoint (so $p ^{-1}(U)$ is partitioned into such sets)
###### Proof
Say $[\gamma]\in([\alpha],U)\cap([\beta],U)$
$[\gamma]=[\alpha \cdot \alpha']=[\beta \cdot \beta']$ for $\alpha',\beta'$ paths in $U$ 
Suppose $[\delta]\in([\alpha],U)$
Then $[\delta]=[\alpha \cdot \alpha'']$ for $\alpha''$ path in $U$ 
Now $\beta'\cdot(\alpha')^{-1}\cdot \alpha''$ path in $U$, so $[\delta]\in([\beta],U)$
Upshot: $([\alpha],U)\subseteq([\beta],U)$
Similarly swapping $\alpha$ and $\beta$ 
##### Claim 2.3
$\tilde{X}$ is simply connected
###### Proof
$\tilde{X}$ is path connected.
Suppose $\gamma$ is a loop based at $x_{0}$, st its lift based at $[c_{x_{0}}]$, say $\tilde{\gamma}$ is a loop. 
Observe: 
Suppose $\gamma:I\to X$ any path starting at $x_{0}$, then lift to $\tilde{X}$ starting at $[c_{x_{0}}]\in \tilde{X}$ is: 
$$
\begin{align}
\tilde{\gamma}:I & \to \tilde{X} \\
s & \to[t\to \gamma(st)]
\end{align}
$$
So $[\gamma]=[c_{x_{0}}]$

So $p_{*}(\pi_{1}(\tilde{X},[c_{x_{0}}]))=\{ e \}\leq \pi_{1}(X,x_{0})$
As $p:\tilde{X}\to X$ is a covering map, $p_{*}$ is injective, so $\pi_{1}(\tilde{X},[c_{x_{0}}])=0$

