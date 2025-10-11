Let $p: \tilde{X}\to X$ be a [[XNotes/Covering Spaces\|covering map]], and $f:Y\to X$ a map. 
Let $\tilde{f}_{0},\tilde{f}_{1}:Y\to \tilde{X}$ be two [[XNotes/Lift\|lifts]] of $f$. 
Then $S=\{ y \in Y\mid \tilde{f}_{0}(y)=\tilde{f_{1}}(y) \}$ is open and closed in $Y$.
#### Proof
##### $S$ open
Fix $y \in S$. Let $f(y)\in U$ evenly covered nbd in $X$. 
Say $p ^{-1}(U)=\sqcup_{\alpha \in I} V_{\alpha}$
Have $\tilde{f}_{0}(y)=\tilde{f}_{1}(y)\in V_{\beta}$, $\beta \in I$.
Set $N=\tilde{f}^{-1}_{0}(V_{\beta})\cap \tilde{f}^{-1}_{1}(V_{\beta})$ (open in $Y$)
As $p|_{V_{\beta}}$ is a homeomorphism, get $\tilde{f}_{0}(n)=\tilde{f}_{1}(n)=p|_{V_{\beta}} ^{-1}(f(n))$ for all $n\in N$ so $\tilde{f}_{0}|_{N}=\tilde{f}_{1}|_{N}$ so $S$ is open.

##### $S$ closed
Let $y\in Y\setminus S$ ie $\tilde{f}_{0}(y)\neq \tilde{f}_{1}(y)$.
Let $f(y)\in U$
$p ^{-1}(U)=\sqcup_{\alpha \in I} V_{\alpha}$ as before

Have $\tilde{f}_{0}(y)\in V_{\beta}$, $\tilde{f}_{1}(y)\in V_{\gamma}$
$N=\tilde{f}_{0}^{-1}(V_{\beta})\cap \tilde{f}_{1}^{-1}(V_{\gamma})$ open in $Y$.
As $p|_{V_{\beta}}$ and $p|_{V_{\gamma}}$ are homeomorphisms, get $N\subseteq Y\setminus S$ so $Y\setminus S$ is open