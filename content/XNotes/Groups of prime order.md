$G$ is a $p$-group if $|G|=p^n$ for some $n$ and prime $p$.
### Theorem (centre)
If $G$ is a $p$-group, then the [[XNotes/Group actions#Action on itself\|centre]] $Z(G)$ is nontrivial.
#### Proof
Note that any conjugacy class has order $1$ or divisible by $p$. $Z$ is the union of all $1$ classes. The union of all other conjugacy classes is $G\setminus Z$. But all other classes are divisible by $p$ so their union has to be divisible by $p$ so $G\setminus Z$ has to be divisible by $p$ so $|Z|$ has to be divisible by $p$ so $|Z|\geq p$.
#### Corollary
If $G$ is a simple $p$-group then $G\cong C_p$.
#### Corollary 
Let $G$ be a $p$-group of order $p^n$. Then $G$ contains a subgroup of order $p^r$ for every $1\leq r\leq n$. 
##### Proof
In the [[XNotes/Simple groups#Decomposition\|decomposition]] of $G$ we have:
$$1=G_0\triangleleft\dots \triangleleft G_m=G$$
where $G_i/G_{i-1}$ is simple. Note that each $G_i$ is a $p$ group, hence so is $G_i/G_{i-1}$. But then $G_i/G_{i-1}\cong C_p$. The claim follows. 
### Lemma
For any group $G$, if $G/Z(G)$ is cyclic, then $G$ is abelian. 
#### Proof
Let $gZ$ be a generator of $G/Z$. Then each element in $G$ can be written as $g^kz$ for some $k$ and $z\in Z$. But now it is easy to check any two elements commute. 
#### Corollary
Any group of order $p^2$ for a prime $p$ is abelian.