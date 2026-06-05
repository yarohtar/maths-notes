Let $S\subseteq L$ and $t\in L$
Then $S\vdash t$ implies $S\models t$.

#### Proof
Let $t_{1},\dots,t_{n}=t$ be a proof of $t$ from $S$
Let $v$ be a model of $S$. Need $v(t)=1$
We prove $v(t_{i})=1$ by induction on $i$
If $t_{i}$ is a premiss then $v(t_{i})=1$ since $v$ is a model of $S$
If $t_{i}$ is an axiom then $v(t_{i})=1$ (all axioms are tautologies)
If $t_{i}$ follows by MP, then by induction check $v(t_{i})=1$
