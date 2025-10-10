There is a register machine $U$, called a universal register machine, such that we have the [[Notes/Computable]] [[Notes/Partial Function]]
$$
f_{U,2}(v,u)=\begin{cases}
f_{M,k+1}(\vec{w}) & \text{if } v=code(M) \text{ for register machine }M \\
 & \text{ with upper register index }k \\
 & \text{ and }u=code(C) \text{ for a configuration} \\
 & \text{ with register content }\vec{w}\text{ of length }k+1 \\
\uparrow & \text{otherwise}
\end{cases}
$$
where we use [[Notes/Encoding Register Machines]] to prove this.

This allows us to extend our notations.
Write $f_{v,k}(\vec{w})=f_{U,2}(v,code(q_{S},\vec{w}))$
Similarly for [[Notes/Domain of a Computable Function]] and [[Notes/Truncation of Register Machine]].

