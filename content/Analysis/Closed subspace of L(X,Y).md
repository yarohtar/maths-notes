$X$, $Y$ normed with $Y$ complete. Then the [[Analysis/Compact Linear Map\|compact]] [[XNotes/Linear Operator\|operators]] form a closed subspace of $L(X,Y)$.
#### Proof
Subspace: Must show that $S$, $T$, compact implies $S+T$ compact
Given $(x_{n})$ in $B_{X}$, have subsequence $(x_{n_{i}})$ with $(S{x_{n_{i}}})$ convergent to $y$.
And then $(x_{n_{i}})$ has a subsequence $(x_{m_{i}})$ with $Tx_{m_{i}}\to y'$ say.
So $(S+T)x_{m_{i}}\to y+y'$.
Closed: Let $T_{1},T_{2},\dots$ compact with $T_{n}\to T$. Need $T$ compact.
Given $\epsilon>0$:
Choose $n$ with $\lVert T_{n}-T \rVert<\epsilon$.
Since $T_{n}(B_{X})$ is totally bounded, have
$T_{n}(B_{X})\subseteq \cup_{i=1}^nB(T_{n}(x_{i}),\epsilon)$ for some $x_{1},\dots x_{n}\in B_{X}$
whence $T(B_{X})\subseteq \cup B(T_{m}(x_{i}),2\epsilon)$,
So $T(B_{X})\subseteq \cup B(T(x_{i}),3\epsilon)$
Thus $T(B_{X})$ is totally bounded.

### Note
So any limit of finite rank operators is compact (???)