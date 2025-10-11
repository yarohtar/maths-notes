$S$ set, $R\subseteq F(S)$ where $F(S)$ is the [[Algebra/Free Group]]. 
Let $\langle \langle R \rangle \rangle \unlhd F(S)$ be the smallest normal subgroup of $F(S)$ containing $R$ 
$\braket{ S | R }=F(S) /\langle \langle R \rangle \rangle$ group with generator $S$ and relative $R$ 
Data $(S,R)$ is called a presentation of the group (finite presentation if $S$ and $R$ are finite sets)

### Universal property of group presentations
For any group $H$, the function
$$
\begin{align}
\{ \text{gp hom }{\psi}:\braket{ S | R } \to H \} & \to \{\text{fn } \phi:S\to H \text{ st } \forall r\in R\ \varphi(r)=e_{H} \} \\
\psi & \to \psi\circ pr\braket{ S | R } |_{S}

\end{align}
$$
is bijective. 
\*where 
$$
pr\braket{ S | R } :F(S)\to F(S) / \langle \langle R \rangle  \rangle 
$$
(Note that $\varphi$ above is the natural homomorphism induced by $\phi$ in [[Algebra/Free Group#Universal property of free groups]])

#### Proof
Suppose $\psi$, $\psi'$ give $\phi=\phi':S\to H$
By [[Algebra/Free Group#Universal property of free groups\|the universal property of free groups]] then also $\varphi=\varphi'$, so:
$\psi\circ pr\braket{ S | R }=\psi'\circ pr\braket{ S | R }$
(Consider $F(S)\to_{pr} \braket{ S | R }\to_{\psi,\psi'} H$)
As $pr\braket{ S | R }$ surjective have $\psi=\psi'$.

Now assume $\phi:S\to H$ st the associated $\varphi:F(S)\to H$ is st
$\varphi(r)=e_{H}$ for all $r\in R$. Then $R\subseteq Ker(\varphi)$
$Ker(\varphi)\unlhd F(S)$, so $\langle \langle R \rangle \rangle\subseteq Ker(\varphi)$ (by minimality)
Then $\varphi$ descends to a well defined $\psi:F(S) / \langle \langle R \rangle \rangle\to H$

### Corollary
Every group has a presentation.
#### Proof
Let $H$ be a group and $\phi:G\to G$ the identity map. 
Find the induced $\varphi:F(G)\to G$ homomorphism by [[Algebra/Free Group#Universal property of free groups]].
Let $R=\mathrm{Ker}(\varphi)$. 
Then $\phi$ induces a homomorphism $\psi:\braket{ G | R }\to G$ which is an isomorphism by the [[Algebra/The isomorphism theorems (Groups)]] and noting that $\varphi$ was surjective. 

### Examples
$G=\braket{ t |  }\cong\mathbb{Z}$
$G=\braket{ a,b | ab^{-3},ba ^{-2} }\cong\mathbb{Z} /5$
