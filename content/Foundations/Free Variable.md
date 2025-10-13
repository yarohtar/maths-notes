Any occurrence of a variable in a formula can be either free or bound. 
1. Any occurrence of any variable in an atomic formula is free
2. Given formulae $p$, $q$ any occurrence of a variable in $p$ or $q$ remains an occurrence of the same type in $(p\implies q)$
3. If $p$ is a formulae and $x$ has at least one free occurrence in $p$ then every free occurence of $x$ in $p$ becomes bound in $(\forall x)p$ (everything else is unchanged)
We let $FV(p)$ be the set of free variables in a formula $p$ i.e. variables that have at least one free occurrence in $p$ 