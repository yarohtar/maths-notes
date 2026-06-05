Let $S\subseteq L$ be a finite set and $t\in L$.
Then there's an algorithm that can determine, in finite time,
whether $S\vdash t$. 
#### Proof
Trivial if $\vdash$ is replaced with $\models$ by [[Foundations/Propositional Logic/Completeness Theorem]]. 
Just do a truth table for $S\cup \{ t \}$ of all $2^{n}$ possible values 
of the primitive propositions that occur in $S\cup \{ t \}$ 
where $n$ is the number of such propositions.