### Proposition
Let $f:(X,x_{0})\to (Y,y_{0})$ be a [[Homotopy/Based space\|based map]]. Then the function
$$
\begin{align}
\pi_{1}(f):\pi_{1}(X,x_{0})&\to \pi_{1}(Y,y_{0}) \\
[\gamma]&\to [f\circ \gamma]
\end{align}
$$
is well defined and satisfies:
1. $\pi_{1}(f)$ is a group homomorphism
2. $f$ based homotopic to $f'$ $\implies \pi_{1}(f)=\pi_{1}(f')$
3. If $(A,a)\to_{h}(B,b)\to_{k}(C,c)$ based maps, then $\pi_{1}(k\circ h)=\pi_{1}(k)\circ \pi_{1}(h)$
4. $\pi_{1}(id_{X})=id_{\pi_{1}(X)}$
#### Proof
Well defined? If $\gamma \simeq \gamma'$ as paths, then $f\circ \gamma \simeq f\circ \gamma'$ as paths.
1. $f\circ c_{x_{0}}=c_{y_{0}}\implies \pi_{1}(f)$ preserves unit
   $f\circ(\gamma \cdot \gamma')=(f\circ \gamma)\cdot(f\circ \gamma')\implies$ composition law respected
2. $f\simeq f'$ relative to $\{ x_{0} \} \implies f\circ \gamma \simeq f'\circ \gamma$ relative to $\{ 0,1 \}$
3. $\pi_{1}(k\circ h)[\gamma]=[k\circ h\circ \gamma]=\pi_{1}(k)[h\circ \gamma]=\pi_{1}(k)\circ \pi_{1}(h)[\gamma]$ for all $\gamma \in \pi_{1}(A,a)$
4. $\pi_{1}(id_{X})[\gamma]=[id_{x}\gamma]=[\gamma]$ for all $\gamma \in \pi_{1}(X,x_{0})$
### Notation
$f_{*}=\pi_{1}(f)$
### Proposition
$u:x_{0}\leadsto x_{1}$ path in $X$ induces a group isomorphism
$$
\begin{align}
u_{\#}:\pi_{1}(X,x_{0})&\to \pi_{1}(X,x_{1}) \\
[\gamma]&\to [u^{-1}\cdot \gamma \cdot u]
\end{align}
$$
(intuitively, we just go from $x_{1}$ to $x_{0}$, then do the loop $\gamma$ and then go back to $x_{1}$ along the same path)
It satisfies:
1. $u\simeq u'$ as paths $\implies u_{\#}=u_{\#}'$
2. $(c_{x_{0}})_{\#}=id_{\pi_{1}(X,x_{0})}$
3. If $v:x_{1}\leadsto x_{2}$, then $(u\cdot v)_{\#}=v_{\#}\circ u_{\#}$
4. If $f:X\to Y$ st $f(x_{0})=y_{0}$ and $f(x_{1})=y_{1}$ then the following diagram commutes:
```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
\pi_1(X,x_0) \arrow[r,"f_*"] \arrow[d,"u_{\#}"] & \pi_1(Y,y_0)\arrow[d,"(f\circ u)_{\#}"]\\
\pi_1(X,x_1)\arrow[r, "f_*"] & \pi_1(Y,y_1)
\end{tikzcd}
\end{document}
```
5. If $x_{1}=x_{0}$, $u_{\#}$ is automorphism of $\pi_{1}(X,x_{0})$ given by conjugation in $[u]\in \pi_{1}(X,x_{0})$
#### Proof
The only interesting part is 4:
$$
\begin{align}
(f\circ u)_{\#}\circ f_{*} [\gamma]&=(f\circ u)_{\#}[f\circ \gamma] \\
&=[(f\circ u)^{-1}\cdot(f\circ \gamma)\cdot(f\circ u)] \\
&=[(f\circ u^{-1})\cdot(f\circ \gamma)\cdot(f\circ u)] \\
&=[f\circ(u^{-1}\cdot \gamma \cdot u)] \\
 & =[f\circ u_{\#}(\gamma)] \\
 & =f_{*}([u_{\#}(\gamma)])
\end{align}
$$
### Warning
$X$ path connected $\implies \pi_{1}(X,x_{0})\cong\pi_{1}(X,x_{1})$ NOT a cannonical isomorphism, it depends on path $x_{0}\leadsto x_{1}$.
NB Abstract properties eg being trivial, abelian, ... make sense without specifiying $x_{0}$

### Lemma
$f,g:X\to Y$, $f\simeq_{H}g$, $x_{0}\in X$. 
Then define $u=H(x_{0},\cdot):f(x_{0})\leadsto g(x_{0})$. 
Then the following diagram commutes:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
\pi_1(X,x_0) \arrow[r,"f_*"] \arrow[rd, "g_*"] & \pi_1(Y,f(x_0)) \arrow[d, "u_{\#}"]\\
& \pi_1(Y,g(x_0))
\end{tikzcd}
\end{document}
```

#### Proof
##### Idea
For a path $\gamma$ in $X$ based at $x_{0}$ we want to construct the following two paths in $Y$ based at $g(x_{0})$ and prove that they are homotopy equivalent.
```
gx0---g o gamma---->gx0
|                  ^
|                  |
u^-1               u
|                  |
|                  |
V                  |
fx0----f o gamma--->fx0
```
Note that $f\circ \gamma=H(\cdot,0)\circ \gamma$ and $g\circ \gamma=H(\cdot,1)\circ \gamma$
We literally put coordinates $I\times I$ on this square.

##### Step 1
$l^+:I\to I\times I$ with $s\to(s,1)$
$l^-:I\to I\times I$ by concatenating:
$s\to(0,1-s)$, $s\to(s,0)$ and $s\to(1,s)$
Then $l^+\simeq_{L} l^-$ relative to $\{ 0,1 \}$ where $L(s,\lambda)=\lambda l^-(s)+(1-\lambda)l^+(s)$

##### Step 2
Let $\gamma$ be a loop based at $x_{0}$ in $X$. 
Set $G: I\times I\to_{\gamma \times id}X\times I\to_{H}Y$.
So $G(t,0)=f\circ \gamma$ and $G(t,1)=g\circ \gamma$ and 
$G(0,t)=H(x_{0},t)=u(t)$
$G\circ l^+\simeq G\circ l^-$ relative to $\{ 0,1 \}$ ie as paths from $g(x_{0})$ to $g(x_{0})$
$[G\circ l^+]=[g\circ \gamma]$ and $[G\circ l^-]=[u^{-1}\cdot(f\circ \gamma)\cdot u]$ so done.

### Theorem
$f:X\to Y$ homotopy equivalence, $x_{0}\in X$
Then $f_{*}:\pi_{1}(X,x_{0})\to \pi_{1}(Y,f(x_{0}))$ is an isomorphism
#### Proof
Let $g:Y\to X$ homotopy inverse of $f$. Say $id_{X}\simeq_{H} g\circ f$.
Let $u(t)=H(x_{0},t)$, a path in $X$ from $x_{0}$ to $g(f(x_{0}))$. 
By previous lemma $(g\circ f)_{*}=u_{\#}\circ(id_{X})_{*}$ 
(where functions are from $X$ to $X$)
Also $u_{\#}$ is an isomorphism so 
$\pi_{1}(X,x_{0})\to _{f_{*}}\pi_{1}(Y,f(x_{0}))\to_{g_{*}}\pi_{1}(X,g\circ f(x_{0}))$
So the first map is injective, while the second is surjectvie because there is an isomorphism $u_{\#}$. 
$u_{\#}:\pi_{1}(X,x_{0})\to \pi_{1}(X,g\circ f(x_{0}))$
Reverse roles of $f$ and $g$:
$\pi_{1}(Y,f(x_{0}))\to_{g_{*}}\pi_{1}(X,g\circ f(x_{0}))\to_{f_{*}}\pi_{1}(Y,f\circ g\circ f(x_{0}))$
so $f_{*}$ is surjective. Now see the commutative diagram (by proposition):
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
\pi_1(X,x_0)\arrow[r,"f_*","inj"'] \arrow[d,"u_{\#}"] & \pi_1(Y,f(x_0)) \arrow[d,"(f\circ u)_{\#}"] \\
\pi_1(X,g\circ f(x_0)) \arrow[r,"f_*", "surj"'] & \pi_1(Y,f\circ g\circ f(x_0))
\end{tikzcd}
\end{document}
```
But then $f_*$ has to be a bijection and it is already a homomorphism so it is an isomorphism.
