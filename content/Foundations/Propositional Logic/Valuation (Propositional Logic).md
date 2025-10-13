A valuation on $L$ in [[Foundations/Propositional Logic/Propositional Logic]] is a function $v:L\to \{ 0,1 \}$ s.t.:
1. $v(\bot)=0$
2. $v(p \implies q)=\begin{cases}0 & v(p)=1\ \land\ v(q)=0 \\ 1 & \text{ otherwise}\end{cases}$

### Proposition
If $v,v'$ are valuations and $v|_{P}=v'|_{P}$ then $v=v'$
### Proposition
Let $w:P\to \{ 0,1 \}$ 
Then there exists a valuation $v$ on $L$ s.t. $v|_{P}=w$
