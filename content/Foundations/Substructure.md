Language of set theory has symbols $\{ \in \}$
### Example
Take
$$
\varepsilon_{0}(x) := (\forall z)(\neg z \in x)
$$
meaning $x=\emptyset$
Also take
$$
\varepsilon_{1}(x):=(\forall z)(z\in x \implies \varepsilon_{0}(z))
$$
meaning $x=\{ \emptyset \}$

Take a model
$$
M\models ZFC
$$
Let $m$ be such that $M\models\varepsilon_{0}(m)$ 
and $n$ such that $M\models\varepsilon_{1}(n)$
Then take $N=M\setminus\{ m \}$
But then $N\models\varepsilon_{0}(n)$ !! 