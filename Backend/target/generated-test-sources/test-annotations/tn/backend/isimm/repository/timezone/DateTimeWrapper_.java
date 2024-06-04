package tn.backend.isimm.repository.timezone;

import jakarta.annotation.Generated;
import jakarta.persistence.metamodel.EntityType;
import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.OffsetTime;
import java.time.ZonedDateTime;

@StaticMetamodel(DateTimeWrapper.class)
@Generated("org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
public abstract class DateTimeWrapper_ {

	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#localDateTime
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, LocalDateTime> localDateTime;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#localTime
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, LocalTime> localTime;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#zonedDateTime
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, ZonedDateTime> zonedDateTime;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#offsetTime
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, OffsetTime> offsetTime;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#offsetDateTime
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, OffsetDateTime> offsetDateTime;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#id
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, Long> id;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#localDate
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, LocalDate> localDate;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper
	 **/
	public static volatile EntityType<DateTimeWrapper> class_;
	
	/**
	 * @see tn.backend.isimm.repository.timezone.DateTimeWrapper#instant
	 **/
	public static volatile SingularAttribute<DateTimeWrapper, Instant> instant;

	public static final String LOCAL_DATE_TIME = "localDateTime";
	public static final String LOCAL_TIME = "localTime";
	public static final String ZONED_DATE_TIME = "zonedDateTime";
	public static final String OFFSET_TIME = "offsetTime";
	public static final String OFFSET_DATE_TIME = "offsetDateTime";
	public static final String ID = "id";
	public static final String LOCAL_DATE = "localDate";
	public static final String INSTANT = "instant";

}

