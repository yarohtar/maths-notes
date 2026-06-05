Given [[Foundations/Category Theory/Functor]]s $\mathcal{C}\xrightarrow{F}\mathcal{D}$ and $\mathcal{D}\xrightarrow{G}\mathcal{C}$,
specifying an [[Foundations/Category Theory/Adjunction]] $(F\dashv G)$
is equivalent to specifying [[Foundations/Category Theory/Natural Transformation]]s 
$\eta:1_{\mathcal{C}}\to GF$ and $\varepsilon:FG\to 1_{\mathcal{D}}$ satisfying
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
F \arrow[r,"F\eta"] 
\arrow[dr,swap, "1_{F}"] 
& FGF \arrow[d,"\varepsilon_{F}"] \\
& F
\end{tikzcd}
\end{document}
```
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
G \arrow[r,"1_{G}"] 
\arrow[dr,swap, "1_{\mathcal{C}}"] 
& GFG \arrow[d,"G\varepsilon"] \\
& G
\end{tikzcd}
\end{document}
```
the triangular identities.
#### Proof
Given $(F\dashv G)$, let $\eta$ and $\varepsilon$ be [[Foundations/Category Theory/Unit]] and [[Foundations/Category Theory/Counit]] respectively.
Then $\varepsilon_{FA}(F\eta_{A})$ corresponds under the [[Foundations/Category Theory/Adjunction]] to $1_{GFA}\eta_{A}=\eta_{A}$, so it's $1_{FA}$. 
The second identity is dual.
Conversely, suppose given $\eta$ and $\varepsilon$ satisfying triangular identities.
Given $A\xrightarrow{f}GB$ we define $\Phi(f)$ to be $FA\xrightarrow{Ff}FGB\xrightarrow{\varepsilon_{B}}B$
and given $FA\xrightarrow{g}B$ we define $\Psi(g)$ to be $A\xrightarrow{\eta_{A}}GFA\xrightarrow{Gg}GB$
Then $\Psi \Phi(f)$ is 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A\arrow[r,"\eta_{A}"] 
\arrow[dr, "f"] 
& GFA \arrow[r,"GFf"]
& GFGB \arrow[r,"G\varepsilon_{B}"]
& GB \\
& GB \arrow[ru, "\eta_{GB}"]
\arrow[rru,swap, "1_{GB}"]
\end{tikzcd}
\end{document}
```
so $\Psi \Phi(f)=f$ and dually $\Phi \Psi(g)=g$ 
And $\Phi$ and $\Psi$ are natural since $\eta$ and $\varepsilon$ are.
### Proposition
Suppose given an equivalence $\mathcal{C}\xrightarrow{F}\mathcal{D}$ and $\mathcal{D}\xrightarrow{G}\mathcal{C}$
and $\alpha$ and $\beta$ [[Foundations/Category Theory/Natural Isomorphism]]s
$\alpha:1_{\mathcal{C}}\to GF$ and $\beta:FG\to 1_{\mathcal{D}}$
Then there are [[Foundations/Category Theory/Natural Isomorphism]]s $\alpha':1_{\mathcal{C}}\to GF$ and $\beta':FG\to 1_{\mathcal{D}}$ 
satisfying the [[Foundations/Category Theory/Triangular Identities]].
In particular $(F\dashv G)$ and $(G\dashv F)$.
#### Proof
We define $\alpha'=\alpha$ and take $\beta'$ to be 
$$
FG\xrightarrow{(\beta_{FG})^{-1}} 
FGFG\xrightarrow{(F\alpha_{G})^{-1}}
FG\xrightarrow{B}1_{\mathcal{D}}
$$
Note that $FG\beta=\beta_{FG}$ since 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
FGFG \arrow[r,"FG\beta"] \arrow[d,"\beta_{FG}"]
 & FG \arrow[d,"\beta"] \\
FG \arrow[r,"\beta"]
 & 1_{\mathcal{D}}
\end{tikzcd}
\end{document}
```
is a [[Foundations/Category Theory/Commutative Diagram]] by naturality and $\beta$ is [[Foundations/Category Theory/Monomorphism]].
Similarly $GF\alpha=\alpha_{GF}$
The triangular identities for $\alpha'$ and $\beta'$ are
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[column sep=huge]
F \arrow[r,"\alpha_{F}"]
\arrow[dr, swap, "1"]
& GF \arrow[r, "(\beta_{FGF})^{-1}"] 
\arrow[d,"(F_{\alpha})^{-1}"]
& FGFGF \arrow[d,"F_{\alpha_{GF}}"] \\
& F \arrow[r,"(\beta_{F})^{-1}"]
\arrow[dr, swap, "1_{F}"]
& FGF \arrow[d,"\beta_{F}"]
\\
& 
&
F
\end{tikzcd}
\end{document}
```
and 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[column sep=huge]
G \arrow[r,"\alpha_{G}"] 
\arrow[dr,swap,"1_{\mathcal{C}}"]
& GFG \arrow[r,"(GFG\beta)^{-1}"]
\arrow[d,"(\alpha_{G})^{-1}"]
& GFGFG \arrow[d,"(GF\alpha_{G})^{-1}=(\alpha_{GFG})^{-1}"]\\
& G \arrow[r,"(GB)^{-1}"]
\arrow[dr,swap,"1_{G}"]
& GFG \arrow[d,"G\beta"] \\
& & G
\end{tikzcd}
\end{document}
```
so $\alpha'$ and $\beta'$ are the unit and counit of [[Foundations/Category Theory/Adjunction]] $(F\dashv G)$ 
and $(\beta')^{-1}$ and $(\alpha')^{-1}$ are the unit and counit of $(G\dashv F)$.