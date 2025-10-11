[[Foundations/Class]]
The Axiom of Replacement is the axiom-scheme 
asserting that the image of a set under a [[XNotes/Function Class]] is a set. 
As usual, we'll have parameters:
$$
\begin{gather}
(\forall t_{1})\dots(\forall t_{n})(\\
(\forall x)(\forall y)(\forall z)((p\land p[z/ y])\implies y=z)\\
\implies(\forall x)(\exists y)(\forall z)(z\in y\iff(\exists u)(u\in x\land p[u/ x, z / y]))
)
\end{gather}
$$
