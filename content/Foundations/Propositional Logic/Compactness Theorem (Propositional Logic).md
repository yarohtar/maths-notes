Let $S\subseteq L$ and $t\in L$. 
If $S\models t$ then there is a finite subset $S'$ of $S$ s.t. $S'\models t$.
#### Proof
Trivial if $\models$ is replaced with $\vdash$ by the [[Foundations/Propositional Logic/Completeness Theorem]].

### Corollary
Let $S\subseteq L$. 
If every finite subset of $S$ has a model, then $S$ has a model.
#### Proof
If $S$ doesn't have a model, then $S\models \bot$. 
By previous, there is a finite subset $S'$ of $S$ s.t. $S'\models \bot$
