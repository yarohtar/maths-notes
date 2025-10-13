A [[Foundations/Set Theory/Relation Class]] $r$ is well-founded if 
every nonempty set has an $r$-minimal member:
$$
(\forall x)(\neg(x=\emptyset) \implies(\exists y)[y\in x\land(\forall z\in x)\neg r(z,y)])
$$
