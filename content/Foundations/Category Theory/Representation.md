A representation of a [[Foundations/Category Theory/Functor]] $F:\mathcal{C}\to \mathrm{Set}$ 
we mean a pair $(A,x)$ where $A\in \operatorname{ob}\mathcal{C}$ and $x\in FA$
is such that $\Psi(x):\mathcal{C}(A,\cdot)\to F$ is an isomorphism.
We also call $x$ a [[Universal Element]] of $F$.

### Corollary
If $(A,x)$ and $(B,y)$ are both representations of $F:\mathcal{C}\to \mathrm{Set}$ 
then there is a unique [[Foundations/Category Theory/Isomorphism]] $A\xrightarrow{f}B$ in $\mathcal{C}$ such that $Ff(x)=y$.
#### Proof
The [[Foundations/Category Theory/Epimorphism]] $Ff(x)=y$ is equivalent to saying that
```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
\mathcal{C}(B,\cdot) \arrow[rr,"\Psi(f)"] \arrow[dr,swap,"\Psi(g)"] 
&&
\mathcal{C}(A,\cdot) \arrow[dl,"\Psi(x)"] \\
& F
\end{tikzcd}
\end{document}
```
commutes.
So $f$ must be the unique [[Foundations/Category Theory/Isomorphism]] in $\mathcal{C}$ 
whose image under the [[Foundations/Category Theory/Yoneda Embedding]] is $\Psi(x)^{-1}\Psi(y)$
