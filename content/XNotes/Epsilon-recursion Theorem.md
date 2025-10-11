Let $G$ be a [[XNotes/Function Class]] defined everywhere.
Then there is a function class $F$ defined everywhere
such that:
$$
(\forall x)(F(x)=G(F|_{x}))
$$
Also $F$ is unique.
Note $F|_{x}$ is the set $\{ (s,F(s)) : s \in x \}$
which is a set by [[Foundations/Axiom of Replacement]]
### Proof
Uniqueness by [[XNotes/Principle of Epsilon-Induction]]

We say $f$ is an attempt if
- $f$ is a function
- $\operatorname{dom}f$ is transitive
and 
$$
(\forall x)(x\in \operatorname{dom}f \implies f(x)=G(f|_{x}))
$$
Note that $f|_{x}$ makes sense as $\operatorname{dom}f$ is transitive.
Now use $\in$ induction to show two attempts agree on intersection of their domains
Another $\in$ induction shows every set is in domain for some $f$
Then $F$ is defined by
$$
(\exists f)('f \text{ is an attempt}'\land y\in f(x))
$$
